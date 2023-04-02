import styles from "@/styles/DownloadBtn.module.scss";
export default function DownloadBtn() {
  function download() {
    const url = "https://lobeprod.azureedge.net/downloads/windows/Lobe.exe";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Lobe.exe");
    document.body.appendChild(link);
    link.click();
  }
  return (
    <>
      <button onClick={download} className={styles.downloadButton}>
        Download
      </button>
    </>
  );
}
