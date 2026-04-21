import * as React from "react";

interface ErrorBoundaryProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  reset() {
    this.setState({ hasError: false });
    // Optionally reload the page to clear any stale state
    // window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8">
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <p className="mb-6 text-muted-foreground">Please try refreshing the page or go back to the homepage.</p>
          <button
            onClick={this.reset}
            className="px-6 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
          >
            Reset
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
