export const convertBlobUrlToFile = async (
    imageUrl: string,
    fileName: string
): Promise<File> => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], fileName, { type: blob.type });

    return file;
};