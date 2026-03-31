import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import type { Product } from "./ProductCard";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductModal({ product, open, onOpenChange }: ProductModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-left">Оставьте заявку</DialogTitle>
          <DialogDescription className="text-center text-base mt-2 text-left">
            Мы проверим наличие требующегося вам оборудования, соорентируем по срокам, адресу доставке и оплате
          </DialogDescription>
        </DialogHeader>
        
  

        <form onSubmit={handleSubmit} className="space-y-4">
          
        <input
  type="text"
  placeholder="Имя"
  className="w-full border-b border-black bg-transparent py-2 text-black placeholder-gray-400 outline-none focus:border-black"
/>

<input
  type="email"
  placeholder="E-mail"
  className="w-full border-b border-black bg-transparent py-2 text-black placeholder-gray-400 outline-none focus:border-black"
/>

<input
  type="tel"
  placeholder="Телефон"
  className="w-full border-b border-black bg-transparent py-2 text-black placeholder-gray-400 outline-none focus:border-black"
/>
<textarea
  className="w-full border-b border-black bg-transparent py-2 text-black placeholder-gray-400 outline-none focus:border-black resize-none"
  defaultValue={`Здравствуйте! Хочу оставить заявку на продукт: ${product?.name ?? ''}`}
/>
          
          <div className="flex gap-4 mt-4">
  <button className="bg-bg-secondary text-white rounded-[30px] px-3">
    Оставить заявку
  </button>

  <button className="bg-bg-primary text-black border border-black rounded-[30px] px-5 py-2">
    Не хотите ждать? Напишите нам!
  </button>

</div>
        </form>


      </DialogContent>
    </Dialog>
  );
}
