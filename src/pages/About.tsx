import Navbar from "@/components/Navbar";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
export default function AboutPage() {
    return (
        <>
        <Navbar />
        <Card className="py-24">
            <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                About knowledge sharing platform
            </h1>
            <p className="mt-4 text-lg text-gray-600">
                Bridging the gap between knowledge seekers and experts
            </p>

            <Separator className="my-8" />

            <div className="flex flex-col items-center gap-8">
                <Avatar className="h-32 w-32">
                <img
                    src="/pawan-avatar.jpg"
                    alt="Pawan"
                    className="h-full w-full object-cover"
                />
                </Avatar>

                <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Meet the Creator</h2>
                <p className="text-gray-600">
                    Hi, I'm Pawan Kumar! As a solo developer passionate about
                    education technology, I created knowledge sharing platform to make knowledge
                    sharing more accessible and personal. My vision is to build a
                    platform where anyone can find guidance and mentorship in their
                    learning journey.
                </p>
                </div>

                <div className="mt-8 grid gap-8 text-left md:grid-cols-2">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                    <p className="text-gray-600">
                    To create a world where knowledge flows freely between
                    individuals, breaking down traditional barriers to learning.
                    We're building a community-driven platform that empowers both
                    learners and experts to grow together.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Why knowledge sharing platform?</h3>
                    <ul className="space-y-2 text-gray-600">
                    <li>• Direct 1:1 mentorship</li>
                    <li>• Personalized learning paths</li>
                    <li>• Community-driven knowledge base</li>
                    <li>• Real-world problem solving</li>
                    </ul>
                </div>
                </div>

                <Button className="mt-8" asChild>
                <a href="/signup">Join Our Community</a>
                </Button>
            </div>
            </div>
        </Card>
        </>
    );
}