import { ShieldCheck, Clock, Star, Car, MapPin, Tag, Headphones } from "lucide-react";

const premiumVideoSectionData = {
  badge: "⭐ PREMIUM TAXI SERVICE",
  titleHighlight: "premium",
  titleMain: "See how cab booking feels",
  subtitle: "A quick look at your smooth, verified and luxurious ride experience with us.",
  image: "wedingcarpic.png",
  photoCount: "1/6",
  featuresLeft: [
    {
      icon: ShieldCheck,
      title: "100% Verified Cabs",
      description: "Trained drivers & well-maintained cars",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Book anytime, anywhere",
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Comfort, safety & luxury in every ride",
    },
  ],
  bottomCards: [
    {
      icon: Car,
      title: "Wide Range of Cars",
      description: "Choose from economy to luxury",
    },
    {
      icon: MapPin,
      title: "Pan India Service",
      description: "Available in 100+ cities",
    },
    {
      icon: Tag,
      title: "Transparent Pricing",
      description: "No hidden charges",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "We're here to help you",
    },
  ],
};

// Default export add kar diya hai jisse Home.tsx ka error solve ho jayega
export default premiumVideoSectionData;