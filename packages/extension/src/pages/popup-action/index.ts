import { ExtMessageType } from "../../types/message";
import { getActiveTab, sendMessageToTab } from "../../uitls/extension";


getActiveTab().then((tab) => {
    sendMessageToTab(tab.id, {
        type: ExtMessageType.showPopup
    })

    window.close()
})
