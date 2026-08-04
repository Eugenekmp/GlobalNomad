"use client";

import { useState } from "react";
import Reservation from "@/components/Reservation/Reservation";
import SuccessModal from "@/components/Modal/SuccessModal";
import { createActivityReservation } from "@/features/activities/api/client-api";
import type { ActivityDetailResponse } from "@/features/activities/type";
import { showToast } from "@/lib/utils/toast";
import { getApiErrorMessage } from "@/lib/utils/getApiErrorMessage";
import useModal from "@/hooks/useModal";

type ReservationSectionProps = Pick<ActivityDetailResponse, "price"> & {
  activityId: number;
};

const ReservationSection = ({ activityId, price }: ReservationSectionProps) => {
  const successModal = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReserve = async ({
    scheduleId,
    headCount,
  }: {
    scheduleId: number;
    headCount: number;
  }) => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    try {
      await createActivityReservation({ activityId, scheduleId, headCount });
      successModal.open();
    } catch (error) {
      showToast.error(getApiErrorMessage(error, "예약에 실패했습니다."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Reservation
        activityId={activityId}
        price={price}
        onReserve={handleReserve}
      />
      <SuccessModal
        {...successModal.modalProps}
        message="예약이 완료되었습니다."
      />
    </>
  );
};

export default ReservationSection;
