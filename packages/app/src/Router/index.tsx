import * as ReactRouter from "react-router-dom";
import { Documentation } from "~/Documentation";
import { Markdown } from "~/Markdown";
import { Overview } from "~/Overview";
import { Pricing } from "~/Pricing";
import { REST } from "~/REST";

// import { Sandbox } from "~/Sandbox";
// import { ImageToImage } from "~/Sandbox/ImageToImage";
import { List } from "~/Sandbox/List";
// import { MultiPrompting } from "~/Sandbox/MultiPrompting";
import { TextToImage } from "~/Sandbox/TextToImage";
// import { Upscaling } from "~/Sandbox/Upscaling";
import { Scroll } from "~/Scroll";
import { Support } from "~/Support";
import { Theme } from "~/Theme";
import { User } from "~/User";

export function Router() {
  Scroll.useScrollToTopOrHashOnNavigate();

  return ReactRouter.useRoutes([
    {
      path: "/",
      element: (
        <Theme.Page>
          <Overview />
        </Theme.Page>
      ),
    },
    {
      path: "/sandbox",
      element: (
        <Theme.Page>
          <List />
        </Theme.Page>
      ),
    },
    {
      path: Pricing.url(),
      element: (
        <Theme.Page>
          <Pricing />
        </Theme.Page>
      ),
    },
    {
      path: "/docs",
      element: (
        <Theme.Page>
          <Documentation.Page />
        </Theme.Page>
      ),
      children: [
        ...Documentation.useRoutes(),
        {
          path: "/docs/api-reference",
          element: <REST.Page />,
        },
      ],
    },
    {
      path: "/sandbox/text-to-image",
      element: (
        <Theme.Page noScroll noFooter>
          <TextToImage.Sandbox />
        </Theme.Page>
      ),
    },
    {
      path: "/sandbox/image-to-image",
      element: (
        <Theme.Page noScroll noFooter>
          {/* <Sandbox
            SandboxComponent={ImageToImage}
            samples={ImageToImage.Samples}
          /> */}
        </Theme.Page>
      ),
    },
    {
      path: "/sandbox/upscaling",
      element: (
        <Theme.Page noScroll noFooter>
          {/* <Sandbox SandboxComponent={Upscaling} samples={Upscaling.Samples} /> */}
        </Theme.Page>
      ),
    },
    {
      path: "/sandbox/multi-prompting",
      element: (
        <Theme.Page noScroll noFooter>
          {/* <TextToImage.Sandbox /> */}
        </Theme.Page>
      ),
    },
    {
      path: User.Logout.url(),
      element: <User.Logout />,
    },
    {
      path: User.Login.Callback.url(),
      element: <User.Login.Callback />,
    },
    {
      path: "/login",
      element: <User.Login.Page />,
    },
    {
      path: "/legal/terms-of-service",
      element: <Markdown.Page>{Markdown.Pages.API_TOS}</Markdown.Page>,
    },
    {
      path: "/legal/privacy-policy",
      element: <Markdown.Page>{Markdown.Pages.Privacy}</Markdown.Page>,
    },
    {
      path: "/faq",
      element: <Markdown.Page>{Markdown.Pages.FAQ}</Markdown.Page>,
    },
    {
      path: User.Account.Page.url(),
      element: (
        <Theme.Page>
          <User.Account.Page />
        </Theme.Page>
      ),
      children: [
        {
          path: "*",
          index: true,
          element: <User.Account.Overview />,
        },
        {
          path: User.Account.Credits.uri(),
          element: <User.Account.Credits autoFocus />,
        },
        {
          path: User.APIKeys.Table.uri(),
          element: <User.APIKeys.Table />,
        },
      ],
    },
    {
      path: Support.Page.url(),
      element: (
        <Theme.Page noScroll>
          <Support.Page />
        </Theme.Page>
      ),
    },
    {
      path: "*",
      element: <Theme.NotFound />,
    },
  ]);
}

export namespace Router {
  export const useNavigate = ReactRouter.useNavigate;
  export const useLocation = ReactRouter.useLocation;

  export const Provider = ReactRouter.BrowserRouter;
}
