"use client";

import { AddSquare } from "iconsax-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { Button } from "../ui/button";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import MultiSelect from "../ui/multi-select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useGetMusics } from "@/lib/store/server/music/queries";

const formSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be a string",
    })
    .min(1, {
      message: "Name is required.",
    }),
  musicIds: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .min(1, {
      message: "Select at least one song to create a playlist.",
    }),
});

export default function Playlist() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      musicIds: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  // Queries
  const { data: musicOptions } = useGetMusics();

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="text-textSecondary text-[12px]">Playlists</div>
        <Dialog>
          <DialogTrigger asChild>
            <Button aria-label="playlist-btn" variant="link">
              <AddSquare className="cursor-pointer" color="#0C90EE" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Playlist</DialogTitle>
              <DialogDescription className="text-xs">
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-start ">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full py-8 space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-gray-600">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="border-gray-500  placeholder:text-xs text-xs"
                            placeholder="Enter Playlist Name"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="musicIds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-gray-600">
                          Songs
                        </FormLabel>
                        <FormControl>
                          <MultiSelect
                            options={musicOptions || []}
                            values={field.value}
                            setValues={(values) => field.onChange(values)}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
