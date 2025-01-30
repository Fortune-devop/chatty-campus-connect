import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-school-primary">EduSchool</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-school-primary transition-colors">Features</a>
          <a href="#faq" className="text-gray-600 hover:text-school-primary transition-colors">FAQ</a>
          <a href="#contact" className="text-gray-600 hover:text-school-primary transition-colors">Contact</a>
        </nav>
        <Button className="bg-school-primary hover:bg-school-primary/90">Get Started</Button>
      </div>
    </header>
  );
};

export default Header;