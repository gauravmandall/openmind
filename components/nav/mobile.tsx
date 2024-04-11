'use client'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { docsConfig } from '@/config/docs'
import Config from '@/config/site'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

export function MobileNav() {
   const [open, setOpen] = useState(false)

   return (
      <Sheet open={open} onOpenChange={setOpen}>
         <SheetTrigger asChild>
            <Button
               variant="ghost"
               className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
          <Image
      src="/logo.png"
      width={40}
      height={50}
      alt="Picture of the author"
    />
               <span className="sr-only">Toggle Menu</span>
            </Button>
         </SheetTrigger>
         <SheetContent side="left" className="pr-0">
            <MobileLink
               href="/"
               className="flex items-center"
               onOpenChange={setOpen}
            >
               <div className="relative z-20 flex items-center text-lg font-medium">
               <Image
      src="/logo.png"
      width={40}
      height={50}
      alt="Picture of the author"
    />

                  {Config.name}
               </div>
            </MobileLink>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
               <div className="flex flex-col space-y-3">
                  {docsConfig.mainNav?.map(
                     (item) =>
                        item.href && (
                           <MobileLink
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                           >
                              {item.title}
                           </MobileLink>
                        )
                  )}
               </div>
               <div className="flex flex-col space-y-2">
                  {docsConfig.sidebarNav.map((item, index) => (
                     <div key={index} className="flex flex-col space-y-3 pt-6">
                        <h4 className="font-medium">{item.title}</h4>
                     </div>
                  ))}
               </div>
            </ScrollArea>
         </SheetContent>
      </Sheet>
   )
}

interface MobileLinkProps extends LinkProps {
   onOpenChange?: (open: boolean) => void
   children: React.ReactNode
   className?: string
}

function MobileLink({
   href,
   onOpenChange,
   className,
   children,
   ...props
}: MobileLinkProps) {
   const router = useRouter()
   return (
      <Link
         href={href}
         onClick={() => {
            router.push(href.toString())
            onOpenChange?.(false)
         }}
         className={cn(className)}
         {...props}
      >
         {children}
      </Link>
   )
}