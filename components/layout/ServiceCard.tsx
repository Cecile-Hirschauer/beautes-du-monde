import { EthnicPattern } from "@/components/ui/EthnicPattern";
import { EthnicButton } from "@/components/ui/ethnic-button";
import React from "react";

interface ServiceCardProps {
  name: string;
  duration: string;
  price: string;
  category?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  duration,
  price,
}) => (
  <div className="p-4 border border-border rounded-md transition-all duration-300 hover:border-gold/30 hover:shadow-sm bg-card relative overflow-hidden group">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
      <EthnicPattern />
    </div>
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-medium mb-1">{name}</h4>
          <p className="text-sm text-muted-foreground">{duration}</p>
        </div>
        <div className="text-right">
          <span className="text-gold font-semibold">{price}</span>
        </div>
      </div>
      <div className="mt-auto pt-3">
        <EthnicButton variant="outline" size="sm" className="w-full">
          Réserver
        </EthnicButton>
      </div>
    </div>
  </div>
);

export default ServiceCard;
