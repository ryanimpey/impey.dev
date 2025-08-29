import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="max-w-2xl mx-auto text-center space-y-8">
                {/* Main 404 Illustration */}
                <div className="relative">
                    <div className="text-9xl font-bold text-muted-foreground/20 select-none">404</div>
                </div>

                {/* Main Message */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                        Oops! Page Not Found
                    </h1>
                    <p className="text-lg text-muted-foreground text-pretty max-w-md mx-auto">
                        It looks like the page you're looking for doesn't exist.
                    </p>
                </div>

                {/* Navigation Options */}
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                            <Link href="/">
                                <Home className="w-4 h-4 mr-2" />
                                Go to Home
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="javascript:history.back()">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Go Back
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Feedback Section */}
                {/* <div className="pt-8 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                        Still can't find what you're looking for?{" "}
                        <Link href="/contact" className="text-primary hover:underline">
                            Let us know
                        </Link>{" "}
                        and we'll help you out.
                    </p>
                </div> */}
            </div>
        </div>
    );
}
