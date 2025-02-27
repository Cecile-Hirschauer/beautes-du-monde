// components/layout/CategoryDescription.tsx
import { ReactNode } from "react";

type CategoryDescriptionProps = {
  icon: ReactNode;
  description: string;
};

const CategoryDescription = ({
  icon,
  description,
}: CategoryDescriptionProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-start">
        <div className="mr-4 text-gold">{icon}</div>
        <div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryDescription;
