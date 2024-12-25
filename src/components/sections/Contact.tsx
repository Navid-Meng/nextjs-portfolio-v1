import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="bg-card">
              <CardContent className="flex items-center gap-4 p-6">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="flex items-center gap-4 p-6">
                <MessageSquare className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Social Media</h3>
                  <p className="text-muted-foreground">@yourusername</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input type="text" placeholder="Subject" />
              <Textarea
                placeholder="Your Message"
                className="min-h-[150px]"
              />
            </div>
            <Button className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}