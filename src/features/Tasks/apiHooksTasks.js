import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {addTask, getAllTasks , deleteTask , updateTask as updateTaskApi , getTaskById} from "./Tasks_api.js";

function useGetallTasks(){
    return useQuery({
        queryKey: ['allTasks'],
        queryFn: getAllTasks,
        // Optional: Keep data fresh for 1 minute
        staleTime: 60 * 1000,
    });
}

function useAddTask(task){
    const queryClient = useQueryClient();

    const {isPending,mutate:addTaskM} = useMutation({
        mutationFn: addTask,
        onError: (error) => {
            console.log(`Error: ${error.message}`);
    },
        onSuccess: () => {
           console.log(`Task added successfully!`);
            queryClient.invalidateQueries({
               queryKey: ['allTasks']
           });
        }
    });

    return {isPending,addTaskM};

}

function useDeleteTask(){
    const queryClient = useQueryClient();
    const {isPending,mutate:DeleteTask} = useMutation({
        mutationFn: deleteTask,
        onError: (error) => {
            console.log(`Error: ${error.message}`);
        },
        onSuccess: () => {
            console.log(`Task deleted successfully!`);
            queryClient.invalidateQueries({
                queryKey: ['allTasks']
            });
        }
    });
    return {isPending,DeleteTask};
}

function useUpdateTask(){
    const queryClient = useQueryClient();
    const {isPending,mutate:updateTask} = useMutation({
        mutationFn: ({ id, ...taskData }) => updateTaskApi(id, taskData),
        onError: (error) => {
            console.log(`Error: ${error.message}`);
        },
        onSuccess: () => {
            console.log(`Task updated successfully!`);
            queryClient.invalidateQueries({
                queryKey: ['allTasks']
            });
        }
    });
    return {isPending,updateTask};
}

export {useGetallTasks , useAddTask , useDeleteTask , useUpdateTask};