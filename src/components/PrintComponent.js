import { Box, Divider, Stack, Typography, Container } from "@mui/material";
import React, { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArrest } from "../redux/arrest/ArrestSlice";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
export const PrintComponent = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { arrestStore, status } = useSelector((state) => state.arrest);
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  const burglaryData = [];
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchArrest());
    }
  }, [dispatch, status]);
  if (arrestStore.data) {
    arrestStore.data.forEach((item) => {
      burglaryData.push({
        date_of_year: item.data_year,
        burglary: item.Burglary,
      });
    });
  }

  return (
    <div style={{ display: "block" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          height: "100%",
          color: "text.primary",
          p: 2,
          mt: 2,
        }}
        ref={ref}
      >
        <Stack>
          <Typography
            variant='h6'
            sx={{
              textAlign: "left",
            }}
          >
            Crime
          </Typography>
          <Divider
            sx={{
              color: "blue",
              bgcolor: "blue",
              height: "2px",
              marginLeft: "60px",
              marginTop: "-15px",
            }}
          />
        </Stack>
        <Stack>
          <Container>
            <Box
              sx={{
                bgcolor: "#f2f4f5",
                height: "78vh",
                borderRadius: "35px",
                width: "103%",
                mt: 4,
              }}
            >
              <Typography
                sx={{
                  p: 2,
                  backgroundColor: "#E8EEFB",
                  borderRadius: "35px 35px 0 0",
                  color: "blue",
                  fontWeight: "bold",
                }}
                variant='body1'
                component='article'
              >
                Burglary
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  ml: -2,
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    rotate: "270deg",
                    height: "4px",
                    alignSelf: "center",
                    fontWeight: "bold",
                  }}
                >
                  Arrests
                </Typography>

                <Stack
                  sx={{
                    backgroundColor: "white",
                    width: "90%",
                    my: 3,
                    mx: 1,
                    borderRadius: "35px",
                  }}
                >
                  <LineChart
                    width={1000}
                    height={350}
                    data={burglaryData}
                    margin={{ top: 20, right: 30, bottom: 5 }}
                  >
                    <CartesianGrid y={1000} stroke='lightgray' />
                    <XAxis dataKey='date_of_year' />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type='linear'
                      dataKey='burglary'
                      stroke='blue'
                      dot={false}
                    />
                  </LineChart>
                </Stack>
              </Stack>
            </Box>
          </Container>
        </Stack>
        <Stack
          sx={{
            mt: 2,
            display: "flex",
          }}
        >
          <Divider
            sx={{
              color: "blue",
              bgcolor: "blue",
              height: "2px",
            }}
          />
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: 2,
              justifyContent: "space-between",
            }}
          >
            <Typography variant='body1' color='blue' fontWeight='bold'>
              Report Generated on {formattedDate}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontWeight: "bold",
              }}
            >
              RealAssitPropertyReport | Page 1 of 25
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
});

export default PrintComponent;
