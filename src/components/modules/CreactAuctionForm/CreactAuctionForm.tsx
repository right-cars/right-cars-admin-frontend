"use client";

import { useState, useRef, useEffect } from "react";
import {useForm} from "react-hook-form";
import {useDisclosure} from "@nextui-org/react";
import { yupResolver } from '@hookform/resolvers/yup';
import { usePathname } from "next/navigation";

import { VehicleFormBlockProps, BlockData } from "@/types/types";

// import InputsBlock from "@/components/common/InputsBlock/InputsBlock";
import InputsAuctionBlock from "@/components/common/InputsAuctionBlock/InputsAuctionBlock";
// import MainImagesBlock from "@/components/common/MainImagesBlock/MainImagesBlock";
// import ImageBlock from "@/components/common/UploadImagesBlock/ImageBlock";
// import VideoBlock from "@/components/common/VideoBlock/VideoBlock";
import SaveOrCancel from "@/components/common/Buttons/SaveOrCancel";

import schema from "./validation";

// import {addCar, updateCarById} from "@/api/cars";
import {Spinner} from "@nextui-org/spinner";

// import VinCode from "./VinCode";

export default function CreactAuctionForm({
  // variant,
    //@ts-expect-error
    car,
    id,
  initialData,
    initialMainImage,
  initialImages,
   initialVideoUrl
}: VehicleFormBlockProps) {
    const [loading, setLoading] = useState(false);
    const [loadingError, setLoadingError] = useState(null);
    const carId = useRef(id);
    const { isOpen, onOpen } = useDisclosure();
    const defaultValues = initialData.map(({inputs}) => inputs).flat().reduce((acum, {name, value}) => ({...acum, [name]: value}) , {});

    const {
        handleSubmit,
        control,
        setValue,
        setError,
        setFocus,
        register,
        // clearErrors,
        watch,
        formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            ...defaultValues,
            // @ts-expect-error
            mainImage: initialMainImage,
            images: initialImages,
            video: initialVideoUrl,
        },
    });

  const [blocks] = useState<BlockData[]>(initialData);
  const pathname = usePathname();

    useEffect(() => {
        const firstError = Object.keys(errors)[0];
        if (firstError) {
            //@ts-expect-error
            setFocus(firstError);
        }
    }, [errors, setFocus]);

  //  const handleVideoUrlChange = (url: string | null) => {
  //      // @ts-expect-error
  //      setValue("video", url);
  // };

   // @ts-expect-error
    const addVehicle = async data => {
        console.log(data)
        //@ts-expect-error
        return setError("image", {message: "Too large image"});
        // const isAdd = pathname === "/create-vehicle";
        //
        // // @ts-expect-error
        // if(!data.images || !data.images.filter(item => Boolean(item)).length) {
        //     // @ts-expect-error
        //     return setError("images", {message: "Need upload images"});
        // }
        //
        // if(!data.mainImage) {
        //     // @ts-expect-error
        //     return setError("mainImage", {message: "Need upload main image"});
        // }
        //
        // // @ts-expect-error
        // data.images = data.images.filter(item => Boolean(item));
        //
        // const formData = new FormData();
        //
        // const textData = {...data};
        //
        // formData.append("dekraReport", textData.dekraReport);
        // formData.append("conditionReport", textData.conditionReport);
        // formData.append("mainImage", textData.mainImage);
        // //@ts-expect-error
        // textData.images.forEach(image => formData.append('images', image));
        //
        // delete textData.mainImage;
        // delete textData.images;
        // delete textData.dekraReport;
        // delete textData.conditionReport;
        //
        // for(const [key, value] of Object.entries(textData)) {
        //     // @ts-expect-error
        //     if(value) formData.append(key, value);
        // }
        //
        // try {
        //     setLoading(true);
        //     if(isAdd) {
        //         const newCar = await addCar(formData);
        //         carId.current = newCar._id;
        //     }
        //     else {
        //         // @ts-expect-error
        //         await updateCarById(id, formData);
        //     }
        //     onOpen();
        //     // reset();
        // }
        // catch(error) {
        //     console.log(error);
        //     // @ts-expect-error
        //     setLoadingError(error?.response?.data?.message || error?.message);
        // }
        // finally {
        //     setLoading(false);
        // }
    }

   const onSubmit = handleSubmit(addVehicle);

    // const [make, model] = watch(["make", "model"]);
    // const title = `${make} ${model}`;

  return (
    <form className="pb-[120px]">
      {/*{variant === "add" && <VinCode />}*/}
        <div className="flex flex-col gap-20">
            <InputsAuctionBlock
                // key={blocks[0].title}
                errors={errors}
                car={car}
                // title={blocks[0].title}
                inputs={blocks[0].inputs}
                // onInputChange={handleInputChange}
                // onFileChange={handleFileChange}
                // @ts-expect-error
                control={control}
                register={register}
            />

            {/*<MainImagesBlock*/}
            {/*    //@ts-expect-error*/}
            {/*    setValue={setValue}*/}
            {/*    errors={errors}*/}
            {/*    //@ts-expect-error*/}
            {/*    clearError={() => clearErrors("mainImage")}*/}
            {/*    initialMainImage={initialMainImage}/>*/}
            {/*<ImageBlock*/}
            {/*    //@ts-expect-error*/}
            {/*    setValue={setValue}*/}
            {/*    errors={errors}*/}
            {/*    //@ts-expect-error*/}
            {/*    clearError={() => clearErrors("images")}*/}
            {/*    initialImages={initialImages}/>*/}

        </div>
        <SaveOrCancel title="publish to the auction" variant="publish" id={carId.current} isOpen={isOpen} onSave={onSubmit} />
        {/*@ts-expect-error*/}
        {errors.image && <p>Error: {errors.image.message}</p>}
        {loading && <div className="text-right mt-4">
            <Spinner size="md" label="Upload car..." labelColor="primary" />
        </div>}
        {loadingError && <p className="text-red-500 text-md text-right mt-4">{loadingError}</p>}
    </form>
  );
}
