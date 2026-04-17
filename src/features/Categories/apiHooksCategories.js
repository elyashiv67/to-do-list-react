import {useQuery} from "@tanstack/react-query";
import {getAllCategories} from "./Categories_api.js";

function useGetAllCategories(){
    return useQuery({
        queryKey: ['allCategories'],
        queryFn: getAllCategories,
        staleTime: 60 * 1000,
    })
}
export {useGetAllCategories};