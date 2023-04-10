import { getStoredCart } from "../Utilities/fakeDB";




export const jobsAndCartData = async () => {


    const jobsData = await fetch('/feature.json')
    const jobs = await jobsData.json()

    const savedCart = getStoredCart()
    let newArr = []
    for (const id in savedCart) {
        const foundJobs = jobs.find(job => job.id ===id)
        if(foundJobs){
            foundJobs.quantity = savedCart[id]
            newArr.push(foundJobs)
        }
    }
    return {newArr, jobs};
}

