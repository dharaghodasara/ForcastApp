package org.apache.cordova;
 
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

//import android.content.Intent;

public class toast extends CordovaPlugin {
    public static final String ACTION_TOAST_SHOW = "show";
    
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        try {
            if (ACTION_TOAST_SHOW.equals(action)) { 
                JSONObject arg_object = args.getJSONObject(0);
                String msg = arg_object.getString("msg");
               // Toast
                callbackContext.success();
               return true;
            }
            callbackContext.error("Invalid action");
            return false;
        } catch(Exception e) {
            System.err.println("Exception: " + e.getMessage());
            callbackContext.error(e.getMessage());
            return false;
        } 
    }
}