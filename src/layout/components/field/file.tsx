import React, { ReactNode, useEffect, useState } from "react";
import { Upload03Icon } from "hugeicons-react";
import Image from "next/image";

type ComponentsProps = {
    onFileRead?: (file: File | null) => void;
    defaultValue?: string | null;
    defaultType?: string | null;
    extension?: string | null; // Tambahkan ekstensi manual
    textAction?: string;
    iconAction?: ReactNode;
    sizeCard?: string;
};

const FilePreview = ({
    onFileRead,
    defaultValue,
    defaultType,
    extension,
    textAction,
    iconAction,
    sizeCard = "w-32 h-32",
}: ComponentsProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [url, setUrl] = useState<string | null>(defaultValue ?? null);
    const [fileType, setFileType] = useState<string | null>(defaultType ?? null);

    useEffect(() => {
        if (defaultValue) {
            // Jika URL berasal dari URL.createObjectURL (blob), langsung gunakan
            if (defaultValue.startsWith("blob:")) {
                setFileType("blob");
                setUrl(defaultValue);
                return;
            }

            // Cek ekstensi jika tersedia
            const fileExt = extension ?? defaultValue.split(".").pop()?.toLowerCase();

            if (fileExt) {
                if (["jpg", "jpeg", "png", "gif", "webp"].includes(fileExt)) {
                    setFileType("image");
                } else if (["pdf"].includes(fileExt)) {
                    setFileType("application/pdf");
                } else {
                    setFileType("application/pdf");
                }

                setUrl(defaultValue);
                return;
            }

            // Jika tidak ada ekstensi, gunakan fetch untuk cek Content-Type
            fetch(defaultValue, { method: "HEAD" })
                .then((res) => {
                    const contentType = res.headers.get("content-type");

                    if (contentType?.includes("image")) {
                        setFileType("image");
                    } else if (contentType?.includes("pdf")) {
                        setFileType("application/pdf");
                    } else {
                        setFileType(null);
                    }

                    setUrl(defaultValue);
                })
                .catch(() => {
                    setFileType(null);
                    setUrl(null);
                });
        }
    }, [defaultValue, extension]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setFile(file);
            setUrl(fileUrl);
            setFileType(file.type);
            onFileRead?.(file);

            return () => URL.revokeObjectURL(fileUrl);
        }
    };

    return (
        <div className="flex-shrink-0 flex items-start">
            <div className={`relative rounded-lg overflow-hidden flex ${sizeCard}`}>
                {fileType?.startsWith("image") && url && (
                    <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={url}
                        alt="image-file"
                        width={1920}
                        height={1080}
                    />
                )}

                {fileType === "application/pdf" && url && (
                    <div className="w-full h-full overflow-hidden">
                        <iframe width="100%" height="100%" src={url} className="styled-iframe" />
                    </div>
                )}

                {fileType === "blob" && url && (
                    <div className="w-full h-full overflow-hidden">
                        <iframe width="100%" height="100%" src={url} className="styled-iframe" />
                    </div>
                )}

                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                    {iconAction ?? <Upload03Icon />}
                    <span className="mt-1 text-xs">{textAction ?? "Change File"}</span>
                </div>

                <input
                    type="file"
                    accept="image/*,application/pdf"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
};

export default FilePreview;
