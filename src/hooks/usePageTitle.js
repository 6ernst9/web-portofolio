import {useEffect} from "react";

export const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title ? `${title} | Ernst Robert` : "Ernst Robert | Java Software Engineer";
    }, [title]);
};