import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatDialog from "./ChatDialog";

const FloatingChat = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-school-secondary hover:bg-school-secondary/90 shadow-lg animate-scale-in"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
      <ChatDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default FloatingChat;