import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon?: LucideIcon;
  content?: string;
}

const InfoModal = ({ isOpen, onClose, title, description, icon: Icon, content }: InfoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            {Icon && (
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
            )}
            <DialogTitle className="text-xl">{title}</DialogTitle>
          </div>
          <DialogDescription className="text-base">
            {description}
          </DialogDescription>
        </DialogHeader>
        {content && (
          <div className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {content}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
