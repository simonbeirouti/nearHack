// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    new_tauri_lib::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(new_tauri_lib::generate_handler![greet])
        .run(new_tauri_lib::generate_context!())
        .expect("error while running tauri application");
}
