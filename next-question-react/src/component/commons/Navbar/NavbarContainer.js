import NavbarUI from "./NavbarPresenter";
import {useRouter} from "next/router"

export default function NavbarLogic(){
    const router = useRouter();

    return<NavbarUI
        router = {router}
    ></NavbarUI>
}