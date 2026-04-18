import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getAllCategories , deleteCategory , addCategory} from "./Categories_api.js";

function useGetAllCategories(){
    return useQuery({
        queryKey: ['allCategories'],
        queryFn: getAllCategories,
        staleTime: 60 * 1000,
    })
}

function useDeleteCategory(){
    const queryClient = useQueryClient();
    const {isPending,mutate:DeleteCategory} = useMutation({
        mutationFn: deleteCategory,
        onError: (error) => {
            console.log(`Error: ${error.message}`);
        },
        onSuccess: () => {
            console.log(`Category deleted successfully!`);
            queryClient.invalidateQueries({
                queryKey: ['allCategories'],
            });
        }
    });
    return {isPending,DeleteCategory};
}

function useAddCategory(category) {
    const queryClient = useQueryClient();
    const {isPending,mutate:AddCategory} = useMutation({
        mutationFn: addCategory,
        onError: (error) => {
            console.log(`Error: ${error.message}`);
        },
        onSuccess: () => {
            console.log(`Category added successfully!`);
            queryClient.invalidateQueries({
                queryKey: ['allCategories'],
            });
        }
    })
    return {isPending,AddCategory};
}


export {useGetAllCategories ,useDeleteCategory ,useAddCategory};