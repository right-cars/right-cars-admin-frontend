"use client";

import { useState, useRef, useEffect } from "react";
import {useForm} from "react-hook-form";
import {useDisclosure} from "@nextui-org/react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
// import { usePathname } from "next/navigation";
import { today, getLocalTimeZone, Time } from "@internationalized/date";
import { VehicleFormBlockProps, BlockData } from "@/types/types";

// import InputsBlock from "@/components/common/InputsBlock/InputsBlock";
import InputsAuctionBlock from "@/components/common/InputsAuctionBlock/InputsAuctionBlock";
// import MainImagesBlock from "@/components/common/MainImagesBlock/MainImagesBlock";
// import ImageBlock from "@/components/common/UploadImagesBlock/ImageBlock";
// import VideoBlock from "@/components/common/VideoBlock/VideoBlock";
import SaveOrCancel from "@/components/common/Buttons/SaveOrCancel";

import schema from "./validation";

// import {addCar, updateCarById} from "@/api/cars";
import {addAuction} from "@/api/auctions";
import {updateCarStatusId} from "@/api/cars";
import {Spinner} from "@nextui-org/spinner";

// import VinCode from "./VinCode";

export default function CreactAuctionForm({
  // variant,
    //@ts-expect-error
    car,
    id,
  initialData,
  //   initialMainImage,
  // initialImages,
  //  initialVideoUrl
}: VehicleFormBlockProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [loadingError, setLoadingError] = useState(null);
    const carId = useRef(id);
    const { isOpen } = useDisclosure();
    const defaultValues = initialData.map(({inputs}) => inputs).flat().reduce((acum, {name, value}) => ({...acum, [name]: value}) , {});

    // @ts-expect-error
    if (!defaultValues.startDate || defaultValues.startDate === "") {
        // @ts-expect-error
        defaultValues.startDate = today(getLocalTimeZone());
    }
// @ts-expect-error
    if (!defaultValues.endDate || defaultValues.endDate === "") {
        // @ts-expect-error
        defaultValues.endDate = today(getLocalTimeZone());
    }


    // @ts-expect-error
    if (!defaultValues.startTime || defaultValues.startTime === "") {
        // @ts-expect-error
        defaultValues.startTime = new Time(10, 0);
    }
// @ts-expect-error
    if (!defaultValues.endTime || defaultValues.endTime === "") {
        // @ts-expect-error
        defaultValues.endTime = new Time(10, 0);
    }

    const {
        handleSubmit,
        control,
        // setValue,
        // setError,
        reset,
        setFocus,
        register,
        watch,
        setValue,
        // clearErrors,
        // watch,

        formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            ...defaultValues,
        },
    });

  const [blocks] = useState<BlockData[]>(initialData);
  // const pathname = usePathname();

    const startDate = watch("startDate");
    const endDate = watch("endDate");

    useEffect(() => {
        if (!startDate || !endDate) return;
        // console.log(startDate.compare(endDate));
        // Если startDate > endDate → ставим endDate = startDate
        // @ts-expect-error
        if (startDate.compare(endDate) > 0) {
            setValue("endDate", startDate, { shouldValidate: true });
        }
    }, [startDate, endDate, setValue]);

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
        try {
            setLoading(true);
            const payload = {...data, startPrice: Number(data.startPrice), car: car._id};
            await addAuction(payload);
            const updateCar = await updateCarStatusId(car._id, {isOnAuction: true});
            router.push('/auction');
            // onOpen();
            reset();
        }
        catch(error) {
            console.log(error);
            // @ts-expect-error
            setLoadingError(error?.response?.data?.message || error?.message);
        }
        finally {
            setLoading(false);
        }
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
