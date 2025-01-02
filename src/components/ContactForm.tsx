import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the form data to your backend
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Namn</FormLabel>
              <FormControl>
                <Input placeholder="Ditt namn" {...field} className="bg-white/10 text-white placeholder:text-gray-400 border-white/20" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">E-post</FormLabel>
              <FormControl>
                <Input placeholder="din@email.se" {...field} className="bg-white/10 text-white placeholder:text-gray-400 border-white/20" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Meddelande</FormLabel>
              <FormControl>
                <Textarea placeholder="Ditt meddelande..." {...field} className="bg-white/10 text-white placeholder:text-gray-400 border-white/20" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Skicka
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;