import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh]">
      <Avatar className="w-30 h-30 flex items-center justify-center">
        <AvatarImage
          src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Google_Incognito_logo.svg"
          alt="@shadcn"
          className="w-full h-full object-cover"
        />
        <AvatarFallback>JP</AvatarFallback>
      </Avatar>

      <div className="container mx-auto max-w-4xl mt-4">
        <h1 className="font-bold text-2xl text-center">
          You&apos;ve gone Incognito
        </h1>
        <p className="mt-4">
          Others who use this device won&apos;t see your activity, so you can
          browse more privately. This won&apos;t change how data is collected by
          websites you visit and the services they use, including Google.
          Downloads, bookmarks and reading list items will be saved.{" "}
          <a href="#" className="text-blue-400 underline">
            Learn more
          </a>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
          <h1 className="text-sm">
            Chrome <span className="font-semibold">won&apos;t save:</span>
            <ul className="list-disc pl-5 text-sm mt-2">
              <li>Your browsing history</li>
              <li>Cookies and site data</li>
              <li>Information entered in forms</li>
            </ul>
          </h1>
          <h1 className="text-sm">
            Your activity{" "}
            <span className="font-semibold">might still be visible</span> to:
            <ul className="list-disc pl-5 text-sm mt-2">
              <li>Websites you visit</li>
              <li>Your employer or school</li>
              <li>Your internet service provider</li>
            </ul>
          </h1>
        </div>

        <div className="container p-4 border rounded-md mx-auto max-w-4xl mt-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">Block third-party cookies</p>
            <Switch />
          </div>
          <p className="text-sm text-muted-foreground">
            When on, sites can&apos;t use cookies that track you across the web.
            Features on some sites may break.
          </p>
        </div>
      </div>
    </section>
  );
}
