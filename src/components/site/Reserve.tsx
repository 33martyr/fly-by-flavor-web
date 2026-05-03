import { FormEvent, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Nome demasiado curto").max(80),
  email: z.string().trim().email("Email inválido").max(160),
  date: z.string().min(1, "Escolha uma data"),
  time: z.string().min(1, "Escolha uma hora"),
  guests: z.coerce.number().int().min(1).max(20),
  notes: z.string().max(400).optional(),
});

export const Reserve = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    toast.success("Reserva recebida — enviámos a confirmação para o seu email.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="reserve" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--ember)/0.18),_transparent_60%)]" />
      <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">Reservar</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 mb-8 leading-[1.05]">
            Garanta o seu
            <br />
            <span className="italic text-gradient-ember">lugar à mesa.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
            Servimos jantares de quarta a domingo. As reservas são confirmadas
            por email em poucos minutos. Para grupos acima de 8 pessoas,
            contacte-nos diretamente.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-4 items-center">
              <span className="h-px w-8 bg-accent" />
              <span className="text-muted-foreground">Cancelamento gratuito até 24h antes</span>
            </li>
            <li className="flex gap-4 items-center">
              <span className="h-px w-8 bg-accent" />
              <span className="text-muted-foreground">Menu de degustação mediante pedido</span>
            </li>
            <li className="flex gap-4 items-center">
              <span className="h-px w-8 bg-accent" />
              <span className="text-muted-foreground">Opções vegetarianas disponíveis</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal bg-card border border-border p-8 md:p-10 shadow-soft"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nome">
              <input name="name" required maxLength={80} className={inputCls} placeholder="O seu nome" />
            </Field>
            <Field label="Email">
              <input name="email" type="email" required maxLength={160} className={inputCls} placeholder="voce@email.com" />
            </Field>
            <Field label="Data">
              <input name="date" type="date" required className={inputCls} />
            </Field>
            <Field label="Hora">
              <input name="time" type="time" required className={inputCls} />
            </Field>
            <Field label="Pessoas" className="sm:col-span-2">
              <input name="guests" type="number" min={1} max={20} defaultValue={2} required className={inputCls} />
            </Field>
            <Field label="Notas (opcional)" className="sm:col-span-2">
              <textarea name="notes" rows={3} maxLength={400} className={inputCls} placeholder="Alergias, ocasião especial..." />
            </Field>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full bg-gradient-ember text-primary-foreground py-4 text-sm uppercase tracking-[0.3em] hover:shadow-glow transition-all duration-500 disabled:opacity-60"
          >
            {loading ? "A processar..." : "Confirmar reserva"}
          </button>
        </form>
      </div>
    </section>
  );
};

const inputCls =
  "w-full bg-background/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors";

const Field = ({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <label className={`block ${className}`}>
    <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
      {label}
    </span>
    {children}
  </label>
);
