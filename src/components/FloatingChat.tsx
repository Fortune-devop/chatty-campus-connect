import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const FloatingChat = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Chat Support",
      description: "Our support team will be with you shortly.",
    });
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-school-secondary hover:bg-school-secondary/90 shadow-lg animate-scale-in"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default FloatingChat;