import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { CartItem } from "../../types";
import { motion, AnimatePresence } from "framer-motion";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartDrawerProps) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-bottom">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-display flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Your Cart ({items.length})
            </SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1 px-6">
          {items.length === 0 ? (
            <div className="h-[60vh] flex flex-col items-center justify-center text-center gap-4">
              <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground max-w-[200px]">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button onClick={onClose} variant="outline" className="mt-2">
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6 py-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex gap-4"
                  >
                    <div className="h-24 w-24 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6 text-muted-foreground hover:text-destructive"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {Object.entries(item.selectedVariants || {}).map(([k, v]) => `${k}: ${v}`).join(", ")}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 rounded-none"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 rounded-none"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="font-semibold text-sm">${(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Upsell Section */}
              <div className="mt-10 pt-6 border-t">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Complete your set
                </h5>
                <div className="bg-muted/50 rounded-xl p-3 flex gap-3 items-center">
                  <div className="h-12 w-12 rounded bg-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=200&auto=format&fit=crop" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium">Titanium Key Loop</p>
                    <p className="text-[10px] text-muted-foreground">$45.00</p>
                  </div>
                  <Button size="sm" variant="outline" className="h-8 text-[10px]">Add</Button>
                </div>
              </div>
            </div>
          )}
        </ScrollArea>

        {items.length > 0 && (
          <SheetFooter className="p-6 bg-background border-t flex-col sm:flex-col gap-4">
            <div className="space-y-2 w-full">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toLocaleString()}`}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-display font-bold text-lg">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>
            <Button className="w-full h-12 text-base font-medium group">
              Checkout
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-[10px] text-center text-muted-foreground">
              Free shipping on orders over $200. Secure checkout guaranteed.
            </p>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
