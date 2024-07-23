"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {ModeToggle} from "@/components/ui/mode-toggle";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function Login() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="relative min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <Card className="max-w-sm w-screen absolute top-auto left-auto">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="username"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Username / Email</FormLabel>
                      <FormControl>
                        <Input placeholder="example..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Hey there! 👋 Please enter your username.
                      </FormDescription>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                {/*<Button type="submit">Log in</Button>*/}
                {/*<Button variant="secondary">Sign up</Button>*/}
                {/*<Loader2 className="mr-2 h-4 w-4 animate-spin" />*/}
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="flex-1 mr-3" variant="secondary">Sign up</Button>
            <Button className="flex-1 ml-3">Log in</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="absolute bottom-4 right-4">
        <ModeToggle/>
      </div>
    </div>
  );
}
