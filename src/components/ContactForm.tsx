import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Namnet måste vara minst 2 tecken"),
  email: z.string().email("Ogiltig e-postadress"),
  message: z.string().min(10, "Meddelandet måste vara minst 10 tecken"),
});

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const mailtoLink = `mailto:info@apstudios.se?subject=Kontaktformulär från ${values.name}&body=Namn: ${values.name}%0D%0AE-post: ${values.email}%0D%0A%0D%0AMeddelande:%0D%0A${values.message}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Tack för ditt meddelande!",
      description: "Vi återkommer till dig så snart som möjligt.",
    });
    
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-black/40 backdrop-blur-sm p-6 rounded-lg">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-medium">Namn</FormLabel>
              <FormControl>
                <Input placeholder="Ditt namn" {...field} className="bg-white/10 text-white placeholder:text-gray-400 border-white/20" />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-medium">E-post</FormLabel>
              <FormControl>
                <Input placeholder="din@email.se" {...field} className="bg-white/10 text-white placeholder:text-gray-400 border-white/20" />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-medium">Meddelande</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Ditt meddelande..." 
                  {...field} 
                  className="bg-white/10 text-white placeholder:text-gray-400 border-white/20 min-h-[120px]" 
                />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6">
          Skicka
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;