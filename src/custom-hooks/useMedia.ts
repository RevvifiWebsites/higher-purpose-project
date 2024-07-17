import { useState, useEffect } from "react";

export default function useMedia(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mql = matchMedia(query);
        setMatches(mql.matches);
        mql.onchange = () => {
            setMatches(mql.matches);
        };
        return () => {
            mql.onchange = null;
        };
    }, [query]);

    return matches;
}
