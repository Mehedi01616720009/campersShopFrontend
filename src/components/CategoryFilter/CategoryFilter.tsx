import { Checkbox, Field, Label } from "@headlessui/react";
import { useState } from "react";
// import { IoCheckbox } from "react-icons/io5";

const CategoryFilter = () => {
    const [enabled, setEnabled] = useState(true);

    return (
        <div className="flex">
            {/* <Checkbox
                checked={enabled}
                onChange={setEnabled}
                id="category"
                className="group size-6 rounded bg-black/10 ring-1 ring-black/15 ring-inset data-[checked]:bg-white"
            >
                <IoCheckbox className="hidden size-6 fill-black group-data-[checked]:block" />
                <label htmlFor="category">Category</label>
            </Checkbox> */}

            <Field className="flex items-center gap-2">
                <Checkbox
                    checked={enabled}
                    onChange={setEnabled}
                    className="group block size-5 rounded border bg-white data-[checked]:bg-black"
                >
                    <svg
                        className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                        viewBox="0 0 14 14"
                        fill="none"
                    >
                        <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Checkbox>
                <Label className={"lg:text-lg"}>Category</Label>
            </Field>
        </div>
    );
};

export default CategoryFilter;
