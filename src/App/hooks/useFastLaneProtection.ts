import { useEffect, useMemo, useState } from 'react';

export interface FastLaneProtectionIF {
    isEnabled: boolean;
    enable: () => void;
    disable: () => void;
    toggle: () => void;
}

export const useFastLaneProtection = (): FastLaneProtectionIF => {
    const LS_KEY = 'fastlane_protection';
    const [enabled, setEnabled] = useState<boolean>(
        JSON.parse(localStorage.getItem(LS_KEY) || 'false'),
    );

    useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(enabled));
    }, [enabled]);

    return useMemo(
        () => ({
            isEnabled: enabled,
            enable: () => setEnabled(true),
            disable: () => setEnabled(false),
            toggle: () => setEnabled((prev) => !prev),
        }),
        [enabled],
    );
};
