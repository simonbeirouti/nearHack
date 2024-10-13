use serde::{Deserialize, Serialize};
use serde_json::json;

#[derive(Serialize, Deserialize)]
pub struct LoginResult {
    account_id: String,
    public_key: String,
}

#[tauri::command]
pub async fn near_login(account_id: String) -> Result<String, String> {
    // This is a simplified example. In a real-world scenario, you'd interact with the NEAR blockchain here.

    // Simulate a login process
    let public_key = "ed25519:6E8sCci9badyRkXb3JoRpBj5p8C6Tw41ELDZoiihKEtp".to_string();

    let result = LoginResult {
        account_id,
        public_key,
    };

    serde_json::to_string(&result).map_err(|e| e.to_string())
}
