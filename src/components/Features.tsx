import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Calendar, Trophy } from "lucide-react";

const features = [
  {
    title: "Expert Teachers",
    description: "Learn from industry professionals with years of experience",
    icon: GraduationCap,
  },
  {
    title: "Community Learning",
    description: "Join a vibrant community of passionate learners",
    icon: Users,
  },
  {
    title: "Flexible Schedule",
    description: "Study at your own pace with our flexible learning programs",
    icon: Calendar,
  },
  {
    title: "Achievement Focused",
    description: "Track your progress and earn certificates as you learn",
    icon: Trophy,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-school-primary mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="animate-scale-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-school-secondary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;