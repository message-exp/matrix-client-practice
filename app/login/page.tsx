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
  CardContent, CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
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
        <Tabs defaultValue="login" className="max-w-sm w-screen absolute top-auto left-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Log in</TabsTrigger>
            <TabsTrigger value="signup">Sign up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Log in</CardTitle>
                {/*<CardDescription>*/}
                {/*  This is log-in tab.*/}
                {/*</CardDescription>*/}
              </CardHeader>
              {/*<CardContent className="space-y-2">*/}
              {/*  <div className="space-y-1">*/}
              {/*    <Label htmlFor="name">Name</Label>*/}
              {/*    <Input id="name" defaultValue="Pedro Duarte" />*/}
              {/*  </div>*/}
              {/*  <div className="space-y-1">*/}
              {/*    <Label htmlFor="username">Username</Label>*/}
              {/*    <Input id="username" defaultValue="@peduarte" />*/}
              {/*  </div>*/}
              {/*</CardContent>*/}
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
                            <Input placeholder="tap here to autofill..." autoFocus {...field} />
                          </FormControl>
                          {/*<FormDescription>*/}
                          {/*  Hey there! 👋 Please enter your username.*/}
                          {/*</FormDescription>*/}
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button className="flex-1" type="submit">Next</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Sign up</CardTitle>
                <CardDescription>
                  Enter your information to create an account
                </CardDescription>
              </CardHeader>
              {/*<CardContent className="space-y-2">*/}
              {/*  <div className="space-y-1">*/}
              {/*    <Label htmlFor="current">Current password</Label>*/}
              {/*    <Input id="current" type="password" />*/}
              {/*  </div>*/}
              {/*  <div className="space-y-1">*/}
              {/*    <Label htmlFor="new">New password</Label>*/}
              {/*    <Input id="new" type="password" />*/}
              {/*  </div>*/}
              {/*</CardContent>*/}
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="first name and last name" {...field} />
                          </FormControl>
                          {/*<FormDescription>*/}
                          {/*  Full name.*/}
                          {/*</FormDescription>*/}
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="username"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="example" {...field} />
                          </FormControl>
                          <FormDescription>
                            Create an unique username.
                          </FormDescription>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                    {/*<Button variant="secondary">Sign up</Button>*/}
                    {/*<Loader2 className="mr-2 h-4 w-4 animate-spin" />*/}
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button className="flex-1" type="submit">Next</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="absolute bottom-4 right-4">
        <ModeToggle/>
      </div>
    </div>
  );
}
