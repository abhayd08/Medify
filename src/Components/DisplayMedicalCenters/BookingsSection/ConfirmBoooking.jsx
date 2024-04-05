import { useContext } from "react";
import MedifyContext from "../../Contexts/MedifyContext";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { enqueueSnackbar } from "notistack";

export default function ({ medicalCenterData }) {
  const {
    bookings,
    setBookings,
    selectedDate,
    selectedSlot,
    isOpen,
    onOpen,
    onOpenChange,
    setSelectedSlot,
    alertType,
    setAlertType,
    bookingToRemove,
    setBookingToRemove,
    dates,
    setDates,
  } = useContext(MedifyContext);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              {alertType === "confirmation" ? (
                <>
                  <ModalHeader className="flex text-[var(--color-primary)] flex-col gap-1">
                    Confirm Booking
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Ready to book your appointment for{" "}
                      <span className="text-[var(--color-primary)]">
                        {selectedDate.date.toLocaleDateString("en-US", {
                          day: "numeric",
                        })}{" "}
                        {selectedDate.date.toLocaleDateString("en-US", {
                          month: "short",
                        })}
                        ,{" "}
                        {selectedDate.date.toLocaleDateString("en-US", {
                          year: "numeric",
                        })}
                      </span>{" "}
                      at{" "}
                      <span className="text-[var(--color-primary)]">
                        {selectedSlot.timing}
                      </span>
                      ?
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      variant="light"
                      onPress={() => {
                        setSelectedSlot(null);
                        setAlertType(null);
                        onClose();
                      }}
                    >
                      Close
                    </Button>
                    <Button
                      color="primary"
                      className="bg-[var(--color-primary)] data-[focus=true]:opacity-100 hover:opacity-100 data-[hover=true]:opacity-100"
                      onPress={() => {
                        setBookings((prevBookings) => {
                          return [
                            ...prevBookings,
                            {
                              id: `booking${prevBookings.length + 1}`,
                              date: selectedDate,
                              slot: selectedSlot,
                              medicalCenterData: medicalCenterData,
                            },
                          ];
                        });
                        // const dateWhereChangeNeeded = dates.find(
                        //   (date) => date.date.id === selectedDate.date.id
                        // );
                        // console.log(dates.indexOf(dateWhereChangeNeeded))
                        // setDates((prevDates) => {
                        //   const datesData = [...prevDates];
                        //   const index = datesData.indexOf(
                        //     dateWhereChangeNeeded
                        //   );
                        //   datesData[index].date.numberOfSlotsAvailable -= 1;
                        //   return datesData;
                        // });
                        setSelectedSlot(null);
                        setAlertType(null);
                        enqueueSnackbar("Slot booked.", { variant: "success" });
                        onClose();
                      }}
                    >
                      Book
                    </Button>
                  </ModalFooter>
                </>
              ) : alertType === "alreadyBooked" ? (
                <>
                  <ModalHeader className="flex text-[var(--color-primary)] flex-col gap-1">
                    Already Booked
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Looks like the slot you've selected is already booked.
                      Would you like to cancel the previous booking?
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      variant="light"
                      onPress={() => {
                        setSelectedSlot(null);
                        setAlertType(null);
                        setBookingToRemove(null);
                        onClose();
                      }}
                    >
                      Close
                    </Button>
                    <Button
                      color="primary"
                      className="bg-danger data-[focus=true]:opacity-100 data-[hover=true]:opacity-100"
                      onPress={() => {
                        setBookings((prevBookings) => {
                          const updatedBookings = prevBookings.filter(
                            (booking) => booking.id !== bookingToRemove.id
                          );
                          return updatedBookings;
                        });

                        setSelectedSlot(null);
                        setBookingToRemove(null);
                        setAlertType(null);
                        onClose();
                      }}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </>
              ) : (
                ""
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
