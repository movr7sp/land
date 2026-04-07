import { jost } from "./font"

interface LocationProperties {
    location : string
}

export function Location(props : LocationProperties) {

    return (
        <div className="w-full mt-5">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                <div className="flex justify-center py-2">
                    <h3 className={jost.className}>
                        {props.location}
                    </h3>
                </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        </div>
    )
}