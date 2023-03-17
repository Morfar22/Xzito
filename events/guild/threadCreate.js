//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot coded by Morfar#0001 | https://discord.gg/dcdev
 * @INFO
 * Work for Milrato Development | 
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
