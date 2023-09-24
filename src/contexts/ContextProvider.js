import React from "react";

export default function ContextProvider(props) {
    const { providers = [], children } = props;

    return (
        <>
            {providers.reduceRight(
                (acc, Comp) => (
                    <Comp>{acc}</Comp>
                ),
                children
            )}
        </>
    );
}
