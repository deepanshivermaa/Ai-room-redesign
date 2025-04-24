import React from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

function CustomLoading({ loading }) {
    return (
        <AlertDialog open={loading}>
            <AlertDialogContent>
                <VisuallyHidden>
                    <AlertDialogTitle>Redesigning in Progress</AlertDialogTitle>
                </VisuallyHidden>
                <div className="flex flex-col items-center justify-center py-6">
                    <img
                        src="/customl.gif"
                        alt="loading"
                        width={100}
                        height={100}
                        className="mb-4"
                    />
                    <h2 className="text-center text-lg font-semibold">
                        Redesigning your Room... Do not Refresh
                    </h2>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CustomLoading
