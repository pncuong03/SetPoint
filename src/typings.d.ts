declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
 
}
import { ExternalProvider } from "@ethersproject/providers";
declare global {
  interface Window {
    ethereum?: ExternalProvider;
  }
}
