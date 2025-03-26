import { ReactNode } from "react"

type ComponentsProps = {
    label: string
    subLabel?: string
    icon?: ReactNode
    padding?: string
    backgroundColor?: string
    labelStyle?: string
    subLabelStyle?: string
    clasName?: string
}

const Label = ({
    label,
    subLabel,
    icon,
    padding,
    backgroundColor,
    labelStyle,
    subLabelStyle,
    clasName,
}: ComponentsProps) => {
    var internalColor = backgroundColor ?? 'bg-white'
    var internalPadding = padding ?? 'p-3'
    var internalLabelStyle = labelStyle ?? 'text-black text-sm'
    var internalSubLabelStyle = subLabelStyle ?? 'text-black text-sm'

    return (
        <div className={`flex flex-row ${internalPadding} ${internalColor} ${clasName}`}>
            <div>
                {icon}
            </div>

            {
                subLabel == null || subLabel == undefined
                    ? (
                        <div className={`ml-2 ${internalLabelStyle}`}>
                            {label}
                        </div>
                    )
                    : (
                        <div className="ml-2 flex flex-col">
                            <span className={`${internalLabelStyle}`}>
                                {label}
                            </span>

                            <span className={`${internalSubLabelStyle}`}>
                                {subLabel}
                            </span>
                        </div>
                    )
            }
        </div>
    )
}

export default Label