import { useState } from "react";
import { useTranslation } from "react-i18next";
import { usePriceList } from "./usePriceList";
import { PriceTable } from "../../components/PriceTable/PriceTable";
import "./PriceList.css";

export function PriceList() {
  const { t } = useTranslation();
  const { data, loading, error } = usePriceList();
  const [showModal, setShowModal] = useState(false);

  if (loading) return <p>Loading price list...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="price-list-page">
      <div className="price-list-header">
        <h1>{t("pricelist")}</h1>
        <span className="place-order" onClick={() => setShowModal(true)}>
          {t("placeOrder")}
        </span>
      </div>
      <p>{t("description")}</p>
      <PriceTable items={data} />

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <h2>{t("qrTitle")}</h2>

            <a
              href="https://chat.whatsapp.com/I9fq75xKGbh9c6UIXq2j31?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/whatsapp.png"
                alt="WhatsApp Group QR"
                className="qr-image"
              />
            </a>

            <p>{t("qrDescription")}</p>
          </div>
        </div>
      )}
    </div>
  );
}
