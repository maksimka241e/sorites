// import supabase from "../supabase";

// export async function createPosts(posts){
//     const user = await supabase.auth.getUser()
//     if(!user) return
//     try{
//     const {data,error} = await supabase.from('posts').insert([posts]).select()
//     location.reload()
//     if(error) throw error
//     return data
//     }catch(e){
//         throw e
//     }
// }

// export async function deletePosts(id){
//     try{
//         const {error} = await supabase.from('posts')
//         .delete()
//         .match({id})
//         location.reload()
//         if(error) throw error
//     }catch(e){
//         throw e
//     }
// }