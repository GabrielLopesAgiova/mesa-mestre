import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
    return (
        <div className="z-20 absolute flex items-center justify-between w-full h-16 bg-transparent px-4">
            <div>
                <Link href={'/'} className="font-cinzel-decorative"> Mesa Mestre </Link>
            </div>
            <div className="flex gap-12">
                <p>Recursos</p>
                <p>Relatos</p>
                <p>Planos</p>
            </div>
            <div className="flex gap-4">
                <Button>Entrar</Button>
                <Button>Começar Agora</Button>
            </div>
        </div>
    )
}